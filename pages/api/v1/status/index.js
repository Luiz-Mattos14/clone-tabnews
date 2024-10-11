function status(request, response) {
  response.status(200).json({
    chave: "Api está funcionando",
  });
}

export default status;
