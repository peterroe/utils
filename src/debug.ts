import util from 'node:util'

export function debug(isDebug: boolean) {
  if (isDebug) {
    return function (desc: string, content: any, depth: number | null = null) {
      console.log(
        desc
        + util.inspect(
          content, false, depth, true,
        ),
      )
    }
  }
  else {
    return () => {}
  }
}
