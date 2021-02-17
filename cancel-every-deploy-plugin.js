module.exports = {
  onPostBuild({ utils: { build: { cancelBuild } } }) {
    cancelBuild('automatically canceling build!')
  }
}
