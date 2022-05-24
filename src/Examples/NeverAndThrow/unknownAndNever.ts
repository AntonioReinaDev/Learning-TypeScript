function viewError(error: string, code: number): never {
    throw {error: error, code: code};
};

viewError("error server", 500);
//used for errors