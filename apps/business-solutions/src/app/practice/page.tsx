// // 'use client';

// // import React, { useState, ChangeEvent, FormEvent } from 'react';

// // interface Todo {
// //     id?: number;
// //     name: string;
// //     email: string;
// //     message: string;
// // }

// // const Page: React.FC = () => {
// //     const [todo, setTodo] = useState<Todo>({
// //         name: '',
// //         email: '',
// //         message: '',
// //     });

// //     const [todoList, setTodoList] = useState<Todo[]>([]);

// //     // Handle input change with proper typing
// //     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// //         const { name, value } = e.target;
// //         setTodo((prevTodo) => ({
// //             ...prevTodo,
// //             [name]: value,
// //         }));
// //     };

// //     // Handle form submission with proper typing
// //     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();

// //         if (todo.name && todo.email && todo.message) {
// //             const newTodo: Todo = {
// //                 id: todoList.length + 1,
// //                 name: todo.name,
// //                 email: todo.email,
// //                 message: todo.message, // Ensure message is included
// //             };

// //             setTodoList([...todoList, newTodo]);

// //             setTodo({
// //                 name: '',
// //                 email: '',
// //                 message: '',
// //             });
// //         } else {
// //             alert('Please fill out all fields.');
// //         }
// //     };

// //     console.log(todoList);

// //     return (
// //         <div className="flex flex-col gap-1 items-center justify-center h-screen text-zinc-900 bg-gray-100">
// //             <form onSubmit={handleSubmit} className="flex flex-col gap-1 items-center justify-center">
// //                 <input
// //                     name="name"
// //                     value={todo.name}
// //                     onChange={handleChange}
// //                     type="text"
// //                     className="border-2 border-gray-300 p-2 rounded-md"
// //                     placeholder="Enter your name"
// //                 />
// //                 <input
// //                     name="email"
// //                     value={todo.email}
// //                     onChange={handleChange}
// //                     type="email"
// //                     className="border-2 border-gray-300 p-2 rounded-md"
// //                     placeholder="Enter your email"
// //                 />
// //                 <input
// //                     name="message"
// //                     value={todo.message}
// //                     onChange={handleChange}
// //                     type="text"
// //                     className="border-2 border-gray-300 p-2 rounded-md"
// //                     placeholder="Enter your message"
// //                 />
// //                 <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
// //                     Submit
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Page;


// 'use client'
// import React, { useState } from 'react'

// interface Todo {
//     id?: number;
//     name: string;
//     email: string;
//     message: string;
// }

// const page = () => {
//     const [todo, setTodo] = useState<Todo>({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [todoList, setTodoList] = useState<Todo[]>([]);
    
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         // Destructure name and value from the event target
//         const { name, value } = e.target;
//         setTodo((prevTodo) => ({
//             ...prevTodo,
//             [name]: value,
//         }));
//     };
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         if (todo.name && todo.email && todo.message) {
//             const newTodo = {
//                 id: todoList.length + 1,
//                 name: todo.name,
//                 email: todo.email,
//                 message: todo.message,
//             };
//             setTodoList([...todoList, newTodo]);
//             setTodo({
//                 name: '',
//                 email: '',
//                 message: '',
//             });
//         } else {
//             alert('Please fill out all fields.');
//         }
//     };
//     return (
//         <div className="flex flex-col gap-1 items-center justify-center h-screen text-zinc-900 bg-gray-100">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-1 items-center justify-center">
//                 <input
//                     name="name"
//                     value={todo.name}
//                     onChange={handleChange}
//                     type="text"
//                     className="border-2 border-gray-300 p-2 rounded-md"
//                     placeholder="Enter your name"
//                 />
//                 <input
//                     name="email"
//                     value={todo.email}
//                     onChange={handleChange}
//                     type="email"
//                     className="border-2 border-gray-300 p-2 rounded-md"
//                     placeholder="Enter your email"
//                 />
//                 <input
//                     name="message"
//                     value={todo.message}
//                     onChange={handleChange}
//                     type="text"
//                     className="border-2 border-gray-300 p-2 rounded-md"
//                     placeholder="Enter your message"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
//                     Submit
//                 </button>
//             </form>

//             <div className="mt-4">
//                 {todoList.map((item) => (
//                     <div key={item.id} className="border-b-2 border-gray-300 p-2">
//                         <p><strong>Name:</strong> {item.name}</p>
//                         <p><strong>Email:</strong> {item.email}</p>
//                         <p><strong>Message:</strong> {item.message}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default page


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page