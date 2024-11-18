
export default async ({ req, res, log, error }) => {

  console.log("Deu certo até aqui")
  return res.json({ ok: true, message: 'Hello World!' });
};