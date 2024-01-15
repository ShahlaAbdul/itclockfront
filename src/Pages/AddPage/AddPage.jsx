import React, { useEffect, useState } from 'react'
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./addPage.scss"

function AddPage() {

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [addData, setAddData] = useState([])


    function handleAdd(val) {
        fetch("http://localhost:5100/", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },  
            body: JSON.stringify(val),
        }
        )
    }

    function getAll() {
        fetch("http://localhost:5100/")
            .then((res) => res.json())
            .then((data) => setAddData(data))
    }
    useEffect(() => {
        getAll()
     
    }, [])
    console.log(addData);
    function handleDelete(id) {
        fetch('http://localhost:5100/'+ id, { method: 'DELETE' })
        .then((res)=>res.json())
        .then(() => getAll());
    }

    return (
        <div>
            <Formik
                initialValues={{ image: '', name: '', author: '' }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Required'),
                    name: Yup.string()
                        .required('Required'),
                    author: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values);
                        handleAdd(values)
                        setSubmitting(false);
                      }, 400);
                }}
            >
                <Form>
                    <label htmlFor="image"> image</label>
                    <Field name="image" type="text" />

                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="author">author </label>
                    <Field name="author" type="text" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <div className="table">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>author</th>
                </tr>
                {addData.map((x)=>( 
                <tr>
                    <td>{x.image}</td>
                    <td>{x.name}</td>
                    <td>{x.author}
                    </td>    
                    <td onClick={()=>handleDelete(x._id)}>delete</td>
                </tr>
                  ))}
            </table>
            
            </div>
           
        </div>

    )

}



export default AddPage;

