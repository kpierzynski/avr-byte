const delay = (ms) => new Promise((resolve) => setTimeout(resolve, 0))

const config = {
  owner: repoOwner,
  repo: repoName,
  branch: repoBranch,
  path: repoArticles,
}

export const fetchFileContent = async ({ path }) => {
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}?ref=${config.branch}`

  await delay(1000)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    const decodedContent = { content: atob(data.content), name: data.name }
    return decodedContent
  } catch (error) {
    console.error('Error fetching file content:', error)
  }
}

function parseArticle(raw, id) {
  const [title, date, description, ...rest] = raw.split('\n')

  return {
    id: id,
    title: title.slice(2),
    date: date.slice(2),
    begin: description.slice(2),
    content: rest.join('\n'),
    length: rest.join('\n').split(' ').length,
  }
}

export const fetchArticle = async (id) => {
  const content = await fetchFileContent({
    path: `${config.path}/${id}.md`,
  })

  return parseArticle(content.content, id)
}

export const fetchArticles = async () => {
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.path}?ref=${config.branch}`

  await delay(1000)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    const articles = await Promise.all(
      data.map(async (file) => {
        return await fetchFileContent({
          path: file.path,
        })
      })
    )

    return articles.map(({ content, name }) =>
      parseArticle(content, name.split('.').at(0))
    )
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
}
