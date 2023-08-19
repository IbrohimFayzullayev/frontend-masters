import { AdjustColorActions } from './color-reducer';

type PropsWithHexColor<P> = P & {
  hexColor: string;
};

type PropsWithDispatch<P> = P & {
  dispatch: React.Dispatch<AdjustColorActions>;
};
