import { ApiContext } from '@/types/data'
import { fetcher } from '@/utils'

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number
}

/**
 * ユーザーAPI （個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
/** */
const getUser = async (content: ApiContext, { id }: GetUserParams) => {
  return await fetcher(``, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getUser
