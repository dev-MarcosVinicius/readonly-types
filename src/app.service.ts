import { Injectable } from '@nestjs/common';
import { ReadOnlyUtil } from 'shared/domain/util/readonly-types.util';

@Injectable()
export class AppService {
  getArrayInterspersed() {
    const values: readonly string[] = ["A", "B", "C"];

    return ReadOnlyUtil.intersperse(values, "X");
  }

  getHello() {
    const keyValuePairx: readonly [number, string] = [1, "one"];

    return ReadOnlyUtil.swapx(keyValuePairx);
  }
}
