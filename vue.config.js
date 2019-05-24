module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('svg-inline-loader').loader('svg-inline-loader')
        if (config.plugins.has('case-sensitive-paths')) {
            config.plugins.delete('case-sensitive-paths')
        }
    },
}
