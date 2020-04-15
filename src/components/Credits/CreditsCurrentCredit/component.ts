import { InputNumber, Button, MessageBox } from 'element-ui';
import {
  HDeepCopy,
} from '@/support/utils';
import {
  Component, Vue, Prop, Emit,
} from 'vue-property-decorator';
import { CreditInterface } from '@/support/interfaces';

@Component({
  components: {
    Button,
    InputNumber,
  },
})
export default class CreditsCurrentCredit extends Vue {
  @Prop() private credit!: CreditInterface;

  private installment: number = this.credit.minInstallment;

  @Emit('handleUnassignCurrentCredit')
  public handleUnassignCurrentCredit(): CreditInterface {
    return HDeepCopy({
      ...this.credit,
    }) as CreditInterface;
  }

  /**
  * Confirm unassign credit.
  */
  public confirmUnassignCredit(): void {
    MessageBox.confirm(
      'Czy na pewno chcesz usunąć wybrany kredyt?',
      'Usuwanie pola',
      {
        confirmButtonText: 'Usuń',
        cancelButtonText: 'Anuluj',
        type: 'warning',
        center: true,
      },
    ).then(this.handleUnassignCurrentCredit).catch();
  }

  public setCurrentValue() {
    this.credit.currentValue -= this.installment;
  }
}
