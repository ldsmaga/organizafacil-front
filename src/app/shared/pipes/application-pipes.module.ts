import { NgModule } from '@angular/core';
import { TruncateTextPipe } from './truncate-text.pipe';
import { RemoveTextPipe } from './remove-text.pipe';
import { SafeUrlPipe } from './safe-url.pipe';

@NgModule({
    imports: [
      // dep modules
    ],
    declarations: [ 
      TruncateTextPipe,
      RemoveTextPipe,
      SafeUrlPipe
    ],
    exports: [
        TruncateTextPipe,
        RemoveTextPipe,
        SafeUrlPipe
    ]
  })
  export class ApplicationPipesModule {}