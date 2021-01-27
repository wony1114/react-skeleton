import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

const UserLoginTypes= {REQUEST: 'UserLogin/REQUEST', SUCCESS: 'UserLogin/SUCCESS', FAIL: 'UserLogin/FAIL'}
const UserLoginRequest = action => ({types: UserLoginTypes.REQUEST, payload: action.payload})
const UserLoginSuccess = action => ({types: UserLoginTypes.SUCCESS, payload: action.payload})
const UserLoginFail = action => ({types: UserLoginTypes.FAIL, payload: action.payload})
export default function UserLoginReducer(state = [], action){
    switch (action.type) {
        case UserLoginTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserLoginTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserLoginTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const UserLogin = () => {
    return (<></>)
}