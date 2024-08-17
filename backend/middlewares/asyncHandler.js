export const asyncHandler = (middlware) => (req, res, next) => {
    Promise.resolve(middlware(req, res, next))
            .catch((error) => {
                console.log(error.message);
                
                res.status(500).json({error: error.message})
            })
}