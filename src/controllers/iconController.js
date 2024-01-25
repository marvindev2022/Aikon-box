const { existsSync, readFileSync } = require("fs")
const path = require("path")

const gerarSVGsDosIcones = (req, res) => {
  try {
    const caminhoPasta = path.join(__dirname, "..", "..", "icons")
    const caminhoNaoEncontrado = path.join(
      __dirname,
      "..",
      "..",
      "icons",
      "Error404.svg"
    )

    const iconsSolicitados = req.query.nomes || req.query.icons

    if (!iconsSolicitados) {
      return res.status(400).send("Você não especificou nenhum ícone!")
    }

    const nomesIcon = iconsSolicitados.split(",").filter(Boolean)

    const elementosSvg = nomesIcon.map((nomeIcon) => {
      const caminhoDoIcone = path.join(caminhoPasta, `${nomeIcon}.svg`)

      if (existsSync(caminhoDoIcone)) {
        const conteudoSvg = readFileSync(caminhoDoIcone, "utf8")

        return `<svg width="64px" height="64px" xmlns="http://www.w3.org/2000/svg">${conteudoSvg}</svg>`
      }

      const naoEncotradoSvg = readFileSync(caminhoNaoEncontrado, "utf8")

      return `<svg width="64px" height="64px" xmlns="http://www.w3.org/2000/svg">${naoEncotradoSvg}</svg> <-"${nomeIcon}"`
    })

    res.send(elementosSvg.join("\n"))
  } catch (error) {
    return res.status(500).send("Erro interno do servidor")
  }
}

module.exports = gerarSVGsDosIcones
