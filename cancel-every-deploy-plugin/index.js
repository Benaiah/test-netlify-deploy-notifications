module.exports = {
  onPostBuild({ utils: { build: { cancelBuild } }, netlifyConfig }) {
    console.log(JSON.stringify(netlifyConfig, null, 2))
    cancelBuild('automatically canceling build!')
  }
}
