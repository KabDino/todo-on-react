import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import {
  changeCompleted,
  deleteTodo,
  getTodos,
  updateNameTodo,
  changeOrderTodoList,
} from '../redux/reducers';
import Preloader from './Preloader';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = (props) => {
  let getTodos = props.getTodos;
  React.useEffect(() => {
    getTodos();
  }, [getTodos]);

  let handleOnDragEnd = (result) => {
    if (!result.destination) return;
    return props.changeOrderTodoList(result.source.index, result.destination.index, props.todoList);
  }

  return (
    <article>
      {props.isFetching ? <Preloader /> : null}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {props.todoList.sort((a, b) => (a.order > b.order ? 1 : -1)).map((todo, index) => (
                <Draggable
                  key={todo.order}
                  draggableId={String(todo.order)}
                  index={todo.order}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}>
                      <TodoItem
                        completed={todo.completed}
                        todoId={todo.id}
                        name={todo.name}
                        order={todo.order}
                        changeCompleted={props.changeCompleted}
                        deleteTodo={props.deleteTodo}
                        updateNameTodo={props.updateNameTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </article>
  );
};

let mapStateToProps = (state) => ({
  todoList: state.todoReducer.todoList,
  isFetching: state.todoReducer.isFetching,
});

export default connect(mapStateToProps, {
  changeCompleted,
  deleteTodo,
  getTodos,
  updateNameTodo,
  changeOrderTodoList,
})(TodoList);
