import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

const UserUpdateTypes= {REQUEST: 'UserUpdate/REQUEST', SUCCESS: 'UserUpdate/SUCCESS', FAIL: 'UserUpdate/FAIL'}
const UserUpdateRequest = action => ({types: UserUpdateTypes.REQUEST, payload: action.payload})
const UserUpdateSuccess = action => ({types: UserUpdateTypes.SUCCESS, payload: action.payload})
const UserUpdateFail = action => ({types: UserUpdateTypes.FAIL, payload: action.payload})
export default function UserUpdateReducer(state = [], action){
    switch (action.type) {
        case UserUpdateTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserUpdateTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserUpdateTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}

export const UserUpdate = () => {
    return (<></>)
}