export function componentMapping() {
    const modules = import.meta.glob('./components/dynamic/*.vue')
    let dynamicComponents = {}
    for (const path in modules) {
        let arr = path.split('/')
        let name = arr[arr.length - 1]
        dynamicComponents[name] = modules[path]
    }
    return dynamicComponents
}




