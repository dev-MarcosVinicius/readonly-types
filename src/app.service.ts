import { Injectable } from '@nestjs/common';
import { ReadOnlyUtil } from 'shared/domain/util/readonly-types.util';

@Injectable()
export class AppService {
  getHello() {
    const values: readonly string[] = ["A", "B", "C"];

    return ReadOnlyUtil.intersperse(values, "X");
  }
}
