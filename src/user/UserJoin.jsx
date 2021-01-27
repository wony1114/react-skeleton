import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';

const UserJoinTypes= {REQUEST: 'UserJoin/REQUEST', SUCCESS: 'UserJoin/SUCCESS', FAIL: 'UserJoin/FAIL'}
const UserJoinRequest = action => ({types: UserJoinTypes.REQUEST, payload: action.payload})
const UserJoinSuccess = action => ({types: UserJoinTypes.SUCCESS, payload: action.payload})
const UserJoinFail = action => ({types: UserJoinTypes.FAIL, payload: action.payload})
export default function UserJoinReducer(state = [], action){
    switch (action.type) {
        case UserJoinTypes.REQUEST:
            return {
                ...state, payload: action.payload
            }
        case UserJoinTypes.SUCCESS:
            return {
                ...state, payload: action.payload
            }
        case UserJoinTypes.FAIL:
            return {
                ...state, payload: action.payload
            }
        default:
            return state
    }
}


export const UserJoin = () => {
    return (<></>)
}