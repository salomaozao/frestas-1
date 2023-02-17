import { styled } from ".";

export const PaginationContainer = styled("nav", {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3rem",

});
  
export const PaginationButton = styled("button", {
    border: "none",
    fontSize: "1.2rem",
    padding: "0.5rem 0.5rem",
    cursor: "pointer",
    backgroundColor: 'transparent',
  
    "&[data-active=true]": {
      fontWeight: 'bold',
    },

    variants:{
        page:{
            actually:{
                color: "$purple",
            },
            paste:{
                color: "$white",
            }
        }
    }
});
export const ButtonBackPagination = styled('button', {
    border: "none",
    cursor: "pointer",
    backgroundColor: 'transparent',
    marginRight: '3rem'
})
export const ButtonNextPagination = styled('button', {
    border: "none",
    cursor: "pointer",
    backgroundColor: 'transparent',
    marginLeft: '3rem'
})