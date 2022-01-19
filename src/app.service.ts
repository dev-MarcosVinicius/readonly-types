import { Injectable } from '@nestjs/common';
import { ReadOnlyUtil } from 'shared/domain/util/readonly-types.util';

@Injectable()
export class AppService {
  getArrayInterspersed() {
    const values: readonly string[] = ["A", "B", "C"];

    return ReadOnlyUtil.intersperse(values, "X");
  }

  getSwapValue() {
    const keyValuePairx: readonly [number, string] = [1, "one"];

    return ReadOnlyUtil.swapx(keyValuePairx);
  }

  useConstAssertions() {
    // this is a object using const assertion
    const ASSERTION = {
      key1: 0,
      key2: 0
    } as const;

    /**
     * this atribuition return error
     * ASSERTION.key1 = 2;
     */
  }
}
