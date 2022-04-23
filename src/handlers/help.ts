import Context from '@/models/Context'
import sendOptions from '@/helpers/sendOptions'

export default function handleHelp(ctx: Context) {
  ctx.questionnaire.step = 1
  return ctx.replyWithLocalization('help', sendOptions(ctx))
}
