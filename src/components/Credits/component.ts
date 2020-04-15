import { Select, Option, Button } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';
import { uuid } from 'uuidv4';
import { CreditInterface } from '@/support/interfaces';
import CreditsCurrentCredit from './CreditsCurrentCredit/index.vue';

/**
* Credits
* Component for content salary
*
* @subpackage Vue
* @author Adrian Korzan <adrian.korzan@gmail.com>
*/
@Component({
  components: {
    Option,
    Select,
    Button,
    CreditsCurrentCredit,
  },
})
export default class Credits extends Vue {
  public credits: Array<CreditInterface> = [];

  public selectedCredit = {
    creditName: 'Kredycik',
    creditValue: 10000,
    currentValue: 14000,
    minInstallment: 14000,
  };

  public availableCredits = [
    {
      creditName: 'Kredycik',
      creditValue: 10000,
      currentValue: 14000,
      minInstallment: 14000,
    },
    {
      creditName: 'Mały kredyt',
      creditValue: 20000,
      currentValue: 26000,
      minInstallment: 13000,
    },
    {
      creditName: 'Mały kredyt inwestycyjny',
      creditValue: 50000,
      currentValue: 60000,
      minInstallment: 10000,
    },
    {
      creditName: 'Kredyt inwestycyjny',
      creditValue: 100000,
      currentValue: 132000,
      minInstallment: 11000,
    },
    {
      creditName: 'Duży kredyt inwestycyjny',
      creditValue: 500000,
      currentValue: 594000,
      minInstallment: 33000,
    },
    {
      creditName: 'Kredyt inwestycyjny dla odważnych',
      creditValue: 1000000,
      currentValue: 1440000,
      minInstallment: 60000,
    },
  ]

  /**
  * Assign new Credit
  */
  public assignNewCredit(): void {
    const newCredit = {
      uuid: uuid(),
      name: this.selectedCredit.creditName,
      firstValue: this.selectedCredit.creditValue,
      currentValue: this.selectedCredit.currentValue,
      minInstallment: this.selectedCredit.minInstallment,
    };

    this.credits.push(newCredit);
  }

  public handleUnassignCurrentCredit(credit: CreditInterface): void {
    this.credits = this.credits.filter(
      (item: CreditInterface) => item.uuid !== credit.uuid,
    );
  }
}
