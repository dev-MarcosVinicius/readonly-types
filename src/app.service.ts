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

    // this is a array using const assertion
    const ORIGIN: readonly [0, 0] = [0, 0];
    // and array of arrays using const assertion
    const digitNames = [
      [0, "zero"],
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
      [6, "six"],
      [7, "seven"],
      [8, "eight"],
      [9, "nine"],
    ] as const;

    /**
     * this atribuition return error
     * ORIGIN[0] = 1;
     */



  }

  getJSON() {
    return ReadOnlyUtil.fetchJSON("https://example.com/", HTTPRequestMethod.GET)
  }
}
