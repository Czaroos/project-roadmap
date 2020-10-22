import * as M from '../../model';

export const useLeftBound = (leftBound: M.InitDate): M.InitDate => {
  const { day, month, year } = leftBound;

  return {
    year,
    month: month ? month : 0,
    day: day ? day : 1,
  };
};

export const useRightBound = (rightBound: M.InitDate): M.InitDate => {
  const { day, month, year } = rightBound;

  return {
    year,
    month: month ? month : 11,
    day: day ? day : 31,
  };
};
