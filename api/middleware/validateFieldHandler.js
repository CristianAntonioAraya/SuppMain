// * Función middleware validadora
// * recibe el Schema de joi
// * property, recibe la propiedad de la req a evaluar, params, query, body, etc

const validateHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property]; // req.property
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(error);
        }
        next();
    };
};

export default validateHandler;
