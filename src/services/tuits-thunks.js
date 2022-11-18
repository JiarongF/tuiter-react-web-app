import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuitAPI) => await service.createTuit(tuitAPI)
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

