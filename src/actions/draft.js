import { CHANGE_DRAFT } from '../constants/actionTypes'

export const changeDraft = draft => ({
  type: CHANGE_DRAFT,
  draft
})
