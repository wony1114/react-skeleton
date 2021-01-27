import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

const UserListTypes= {REQUEST: 'UserList/REQUEST', SUCCESS: 'UserList/SUCCESS', FAIL: 'UserList/FAIL'}
const UserListRequest = action => ({types: UserListTypes.REQUEST, payload: action.payload})
const UserListSuccess = action => ({types: UserListTypes.SUCCESS, payload: action.payload})
const UserListFail = action => ({types: UserListTypes.FAIL, payload: action.payload})
export default function UserListReducer(state = [], action){
    switch (action.type) {
        case UserListTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserListTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserListTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const UserList = () => {
    return (<></>)
}