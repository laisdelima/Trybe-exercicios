const teams = require('../utils/teams');

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
  
    if (teams.some((team) => team.id === id)) {
      return next(); // usando return para evitar que duas respostas sejam enviadas. Assim, ou se chama o next() ou se envia a resposta res.status. Alternativa: usar um else.
    }
    res.sendStatus(404);
  };

module.exports = existingId;