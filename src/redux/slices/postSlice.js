import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

const  initialState ={
    posts:[],
    errors:null,
    loading:null,
    selectedPost:null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectedWithValue})=> {
        try {
           const {data} = await postsService.getAll();
           return data
        }catch (e){
            return rejectedWithValue (e.response.data)
        }
}
)

const getById = createAsyncThunk (
    'postSlice/getById',
     async ({id}, {rejectedWithValue})=> {
         try {
             const {data} = await postsService.getById(id);
             return data
         }catch (e) {
             return rejectedWithValue (e.response.data)
         }
     }
)

const postSlice = createSlice ({
    name: 'postSlice',
    initialState,
    reducers:{
        setSelectedPost:(state, action)=> {
            state.selectedPost = action.payload
        }
    },
    extraReducers: {
         [getAll.fulfilled]:(state, action) => {
             state.loading = false
             state.posts = action.payload
         },
         [getAll.rejected]:(state, action) => {
             state.loading = false
             state.errors = action.payload
         },
        [getAll.pending]:(state) => {
             state.loading = true
        },
        [getById.fulfilled]:(state, action) => {
             state.selectedPost = action.payload
        }
    }
    })

const {reducer:postReducer, actions: {setSelectedPost}} = postSlice;

const postAction = {
    setSelectedPost,
    getAll,
    getById
}

export {
    postReducer,
    postAction
}