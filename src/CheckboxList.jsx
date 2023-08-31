
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import "./styles.css"
export function CheckboxList({ todos, onCompletedToggle, deleteTodo }) {

  return (
    <div className="topMargin">
    <List sx={{ width: '100%', bgcolor: 'background.paper'}} >
      <Stack>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;
          return (
            <ListItem
              key={todo.id}
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    onChange={(e) => onCompletedToggle(todo.id, e.target.checked)}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.title} />
              </ListItemButton>
              <IconButton aria-label="delete" size="large" onClick={() => deleteTodo(todo.id)} >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </Stack>
    </List>
    </div>
  );
}