import * as migration_20250129_091928_optional_name_her from './20250129_091928_optional_name_her';
import * as migration_20250131_055642_optional_name_here from './20250131_055642_optional_name_here';
import * as migration_20250131_060734_added_steps from './20250131_060734_added_steps';
import * as migration_20250131_061255_added_step from './20250131_061255_added_step';

export const migrations = [
  {
    up: migration_20250129_091928_optional_name_her.up,
    down: migration_20250129_091928_optional_name_her.down,
    name: '20250129_091928_optional_name_her',
  },
  {
    up: migration_20250131_055642_optional_name_here.up,
    down: migration_20250131_055642_optional_name_here.down,
    name: '20250131_055642_optional_name_here',
  },
  {
    up: migration_20250131_060734_added_steps.up,
    down: migration_20250131_060734_added_steps.down,
    name: '20250131_060734_added_steps',
  },
  {
    up: migration_20250131_061255_added_step.up,
    down: migration_20250131_061255_added_step.down,
    name: '20250131_061255_added_step'
  },
];
