import React from 'react';

const BlogTow = () => {
    return (
        <div className='mb-8'>
            <h1 className='text-lg font-semibold'>Q.What are the different ways to manage a state in a React application?</h1>
            <div>
                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.</p>
                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
                <h1 className='ml-10 text-2xl'>How to Manage Local State in React</h1>
                <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.
                    useState is the first tool you should reach for to manage state in your components.
                    It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function</p>

                <h1 className='ml-10 text-2xl'>How to Manage Global State in React</h1>
                <p>Once you attempt to manage state across multiple components, things get a bit trickier.

                    You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                    What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                    To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>

                <h1 className='ml-10 text-2xl'>How to Manage Server State in React</h1>
                <p>t first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.

                    What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                    To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</p>
                <h1 className='ml-10 text-2xl'>How to Manage URL State in React</h1>
                <p>To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.

                    URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.

                    If you are using React Router, you can get all the information you need using useHistory or useLocation</p>
            </div>
        </div>
    );
};

export default BlogTow;