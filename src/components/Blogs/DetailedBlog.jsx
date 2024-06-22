import React from 'react'

const DetailedBlog = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id')

    console.log('myParam---', myParam)

    return (
        <div>DetailedBlog</div>
    )
}

export default DetailedBlog