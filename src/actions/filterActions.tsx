export function setCategoryWorkAction ( category:string ) {
    return (
        console.log('(Action) -> Filter was done'),
        {
            type: 'Works/setCategory',
            payload: category
        }
    );
};