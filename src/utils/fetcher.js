export const fetchFileContent = async ({ path, owner, repo, branch }) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    console.log(data)

    const decodedContent = atob(data.content)
    return decodedContent
  } catch (error) {
    console.error('Error fetching file content:', error)
  }
}

export const fetchRepoFiles = async ({ owner, repo, path, branch }) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const fileNames = data.map((file) => file.name)
    return fileNames
  } catch (error) {
    console.error('Error fetching files:', error)
  }
}
