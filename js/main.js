import Player     from './player/index'
import BackGround from './runtime/background'
import GameInfo   from './runtime/gameinfo'
import Music      from './runtime/music'
import DataBus    from './databus'

let ctx   = canvas.getContext('2d')
let databus = new DataBus()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId    = 0

    // ctx.fillStyle = '#ffffff'

    // ctx.fillRect(0,0, 100, 100)
    // console.log(ctx)
    this.eventListener()
    this.restart()
  }

  restart() {
    // databus.reset()

    // canvas.removeEventListener(
    //   'touchstart',
    //   this.touchHandler
    // )

    this.bg       = new BackGround(ctx)
    this.player   = new Player(ctx)
    this.gameinfo = new GameInfo()
    this.music    = new Music()

    this.hasEventBind = false

    // debugger
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)



    // 清除上一局的动画
    // window.cancelAnimationFrame(this.aniId);

    // this.aniId = window.requestAnimationFrame(
    //   this.bindLoop,
    //   canvas
    // )
  }

  eventListener (e) {
    canvas.addEventListener('touchstart', (e) => {
      console.log('touch start')
    })

    canvas.addEventListener('touchmove', (e) => {
      console.log('touch move')
    })

    canvas.addEventListener('touchend', (e) => {
      console.log('touch ends')
    })

  }
}
