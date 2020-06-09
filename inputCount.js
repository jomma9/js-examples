      let diff = 100;
      if (event.target.value) {
        diff = 100 - event.target.value.length;
      }
      this.setState({ agreementTitleCount: diff });
