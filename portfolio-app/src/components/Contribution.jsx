import { List, ListItem, ListItemText} from "@mui/material";

const Contribution = ({ contribution }) => {
    return (
        <List>
            <ListItem>
                <ListItemText sx={{ margin:"-10px" }}>
                    {contribution}
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default Contribution;