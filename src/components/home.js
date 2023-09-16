import Project from './project'

export default class Home {
    static load() {
        Project.restore()
    }
}