const handler = async (event) => {
    const name = event.queryStringParameters.name;
    const response = {
        statusCode: 200,
        body: JSON.stringify({message: `Hello ${name}`}),
        headers: {
            foo: 'bar'
        }
    };
    return response;
};

const wrapper = (handlerFn) => {
    return async function () {
        let response = await handlerFn.apply(this, arguments);
        response.headers = {
          ...response.headers,
          'Access-Control-Allow-Origin': '*'
        } ;
        return response;
    }
};

// ==== main ====
const main = async () => {
    const event = {
        queryStringParameters: {
            name: 'Jose'
        }
    };
    const wrappedHandler = wrapper(handler);
    const response = await wrappedHandler(event);
    console.log('=== LAMBDA RESPONSE ===');
    console.dir(response);
};
main();