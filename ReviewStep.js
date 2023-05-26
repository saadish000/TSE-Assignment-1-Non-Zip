import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

const ReviewStep = ({ cartList, customerInfo, invoiceId, totalPrice }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>
            <List disablePadding>
                {cartList.map((row) => (
                    <ListItem
                        key={row["product"]["id"]}
                        className={classes.listItem}
                    >
                        <ListItemText
                            primary={row["product"]["name"]}
                            secondary={`${row["count"]} X ${row["product"]["price"]}`}
                        />
                        <Typography variant="body2">
                            ${row["count"] * row["product"]["price"]}
                        </Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {`$ ${totalPrice}`}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Shipping
                    </Typography>
                    <Typography gutterBottom>
                        Name:{customerInfo["firstname"]}{" "}
                        {customerInfo["firstname"]}
                    </Typography>
                    <Typography gutterBottom>
                        Address: {customerInfo["address"]},{" "}
                        {customerInfo["city"]} {customerInfo["province"]},{" "}
                        {customerInfo["country"]}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Invoice ID for tracking
                    </Typography>
                    <Typography gutterBottom>{invoiceId}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default ReviewStep;
