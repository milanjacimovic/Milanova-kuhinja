import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({component: Component, path})=>{
return (<Route exact path={path}>
<Component>

</Component>
</Route>)
}

export default PublicRoute