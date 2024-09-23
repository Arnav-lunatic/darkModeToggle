import React from 'react'

function Card() {
    return (
        <div className='grid gap-4 w-96 dark:bg-zinc-900 m-auto p-6 bg-zinc-300 rounded-2xl'>
            <img src="https://images.unsplash.com/photo-1520358889634-04b1a67b3f0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className='rounded-xl' />
            <h1 className='text-4xl font-bold text-center'>Cool Light Saber</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In nostrum, ab cumque recusandae similique qui iste dolorum enim minima quos rem. Modi, consequatur quasi. Quos officiis molestias in sint rerum?</p>
        </div>
    )
}

export default Card