import * as core from '@actions/core';

export interface TestOptions {
  /**
   * my first input
   */
  readonly input1: string;
  /**
   * my second input
   *
   * @default - 0
   */
  readonly input2?: number;
  /**
   * my third input
   *
   * @default - [first, second]
   */
  readonly input3?: string[];
  /**
   * my fourth input
   */
  readonly input4: number[];
  /**
   * my fifth input
   *
   * @default - {}
   */
  readonly input5?: Record<string, string>;
}

export function loadActionOptions(): TestOptions {
  return {
    input1: core.getInput('input1'),
    input2: Number(core.getInput('input2')),
    input3: renderListInput(core.getInput('input3')),
    input4: toNumberList(renderListInput(core.getInput('input4'))),
    input5: JSON.parse(core.getInput('input5')),
  };
}

/**
 * Renders a TypeScript list based on what we expect the list to look like in yaml.
 * We expect to see something like \\"[item1,item2]\\". GitHub will return '' if the input
 * is not defined, which will get translated by this function to [].
 */
function renderListInput(rawInput: string): string[] {
  return (rawInput === '' || rawInput === '[]') ? [] : rawInput.replace(/\\\\[|\\\\]/gi, '').split(',');
}

function toNumberList(list: string[]): number[] {
  return list.map((i) => Number(i));
}