import React from 'react';
import { Field, Form, Formik } from 'formic';
import {connect} from 'react-redux';
import { createTask } from 'actions/toDoListCreators';

const TaskForm = (props) => {
    const {createAction} = props;
    const onSubmit = (values, formikBag) => {
        createAction(values);
        formikBag.resetForm();
    }
    return (
        <Formik initialValues ={{body:'', isDone:false}}
        onSubmit={onSubmit}>
            <Form>
                <Field name='body' />
                <input type='submit' value='Add task' />
                <input type='reset' value='Reset' />
            </Form>
        </Formik>
    );
}

const mapDispatchToProps = (dispatch) => ({
    createTaskAction: () => dispatch(createTask(values))
})

export default connect(undefined, mapDispatchToProps)(TaskForm);
