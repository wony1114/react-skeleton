import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

const UserDetailTypes= {REQUEST: 'UserDetail/REQUEST', SUCCESS: 'UserDetail/SUCCESS', FAIL: 'UserDetail/FAIL'}
const UserDetailRequest = action => ({types: UserDetailTypes.REQUEST, payload: action.payload})
const UserDetailSuccess = action => ({types: UserDetailTypes.SUCCESS, payload: action.payload})
const UserDetailFail = action => ({types: UserDetailTypes.FAIL, payload: action.payload})
export default function UserDetailReducer(state = [], action){
    switch (action.type) {
        case UserDetailTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserDetailTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserDetailTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const UserDetail = () => {
    return (<></>)
}